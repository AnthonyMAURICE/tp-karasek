class Question{
    constructor(_questionStatement) {
        this.id = _questionStatement.id
        this.statement = _questionStatement;
        this.value = 0;
        this.htmlFieldset = this.htmlFieldsetCreator(_questionStatement)
    }

    htmlFieldsetCreator() {
        let fieldset = document.createElement('fieldset');
        let statement = document.createElement('p')
        let radio1 = document.createElement('input');
        let label1 = document.createElement('label');
        let radio2 = document.createElement('input');
        let label2 = document.createElement('label');
        let radio3 = document.createElement('input');
        let label3 = document.createElement('label');
        let radio4 = document.createElement('input');
        let label4 = document.createElement('label');
        
        let timestamp = Date.now();
    
        statement.textContent = this.statement;
        label1.textContent = 'Pas du tout d\'accord'
        label1.setAttribute('for', 'radio1' + timestamp)
        label2.textContent = 'Pas d\'accord'
        label2.setAttribute('for', 'radio2' + timestamp)
        label3.textContent = 'D\'accord'
        label3.setAttribute('for', 'radio3' + timestamp)
        label4.textContent = 'Tout à fait d\'accord'
        label4.setAttribute('for', 'radio4' + timestamp)
    
        radio1.id = 'radio1' + timestamp;
        radio1.type = 'radio'
        radio1.name = timestamp;
        radio1.addEventListener('click', ()=>{
            this.value = 1;
        });
    
        radio2.id = 'radio2' + timestamp;
        radio2.type = 'radio'
        radio2.name = timestamp;
        radio2.addEventListener('click', ()=>{
            this.value = 2;
        });
    
        radio3.id = 'radio3' + timestamp;
        radio3.type = 'radio'
        radio3.name = timestamp;
        radio3.addEventListener('click', ()=>{
            this.value = 3;
        });
    
        radio4.id = 'radio4' + timestamp;
        radio4.type = 'radio'
        radio4.name = timestamp;
        radio4.addEventListener('click', ()=>{
            this.value = 4;
        });
    
        fieldset.appendChild(statement);
        fieldset.appendChild(label1);
        fieldset.appendChild(radio1);
        fieldset.appendChild(label2);
        fieldset.appendChild(radio2);
        fieldset.appendChild(label3);
        fieldset.appendChild(radio3);
        fieldset.appendChild(label4);
        fieldset.appendChild(radio4);
    
        return fieldset;
    }
}

export {Question}