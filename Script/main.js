var app = new Vue({
    el: '#app',
   
    data: {
        errorMsg: "",
        successMsg: "",
        adm: false,
        displayAddOption: false,
        displayEditOption: false,
        displayDeleteOption: false,
        visitors:[],
        newVisitor:{ name: "",surname:"",phone: "",email:"",image:""},
        selectedVisitor:{},   
    },
    mounted(){
        this.getAllVisitors();
    },
    methods: {

        toggle(){
            this.adm = !this.adm;
        },

        getAllVisitors(){
            axios.get("http://localhost:8000/CRUD/API/displayAllVisitors.php?action=read").then(function(response){
                if(response.data.error){
                    app.errorMsg = response.data.message;
                }
                else{
                    app.visitors = response.data.visitors;
                }   
            });
        },

        toFormData(obj){
            var formData = new FormData();
            for(i in obj){
                formData.append(i,obj[i])
            }
            return formData;
        },

        selectedToChange(visitor){
            app.selectedVisitor = visitor;
        },

        addVisitor(){
            var formData = app.toFormData(app.newVisitor)
            axios.post("http://localhost:8000/CRUD/API/createVisitor.php?action=create", formData,{headers:{'Content-Type':'multipart/form-data'}}).then(function(response){
                app.newVisitor = { name: "",surname:"",phone: "",email:"",image:"" };
                if(response.data.error){
                    app.errorMsg = response.data.message;
                }
                else{
                    app.successMsg = response.data.message;
                    app.getAllVisitors();
                }   
            });
        },

        updateVisitor(){
            var formData = app.toFormData(app.selectedVisitor);
            axios.post("http://localhost:8000/CRUD/API/updateVisitor.php?action=update",formData).then(function(response){
                app.selectedVisitor = {};
                if(response.data.error){
                    app.errorMsg = response.data.message;
                }
                else{
                    app.successMsg = response.data.visitors;
                    app.getAllVisitors();
                }   
            });
        },

        deleteVisitor(){
            var formData = app.toFormData(app.selectedVisitor);
            axios.post("http://localhost:8000/CRUD/API/deleteVisitor.php?action=delete",formData).then(function(response){
                app.selectedVisitor = {};
                if(response.data.error){
                    app.errorMsg = response.data.message;
                }
                else{
                    app.visitors = response.data.visitors;
                    app.getAllVisitors();
                }   
            });
        },
    }
})