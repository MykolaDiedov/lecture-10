const toDoList = {
    tasks: [],
   
    getStatistics() {
        const result = {
           total: this.tasks.length,
        };
        const completed = this.tasks.filter((i) => i.isComplete).length;

        result.completed = completed;
        result.inComplete = result.total - completed;

        return result;
    },
        
    
    
    addTasks(text) {
        const task = {
            text,
            isComplete: false,
            id: Date.now(),
        };

        const search = this.tasks.find(function(el) {
            return el.text === text;
        });
        if (!search) {

            this.tasks.push(task);
        } else {

            console.log('ошибка')
        }
            
    },

    deleteTasks(id, ask = confirm('точно этого желаете?')) {
    
        if (ask) {
        const index = this.getTasksIndexById(id);

            this.tasks.splice(index, 1);
       
        }
    },

    renameTasks(id, text, ask = confirm('точно этого желаете?')) {
        if (ask) {
        const index = this.getTasksIndexById(id);
        
            this.tasks[index].text = text;
        }
    },

    setTasksAsComplete(id, ask = confirm('точно этого желаете?')) {
        if (ask) {
        const index = this.getTasksIndexById(id);
        
        this.tasks[index].isComplete = true;
        }
    },

    getTasksIndexById(id) {
        return this.tasks.findIndex(function(el) {
            return el.id === id;
        });
    },  
  

};

