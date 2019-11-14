<template>
  <!-- Add New Visitor Modal -->
    <div id="overlay" v-if="displayAddOption">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header ">
                    <h4 class="modal-title ">New Visitor</h4>
                    <button type="button" class="close" @click="displayAddOption = false"> X </button>
                </div>
                <div class="modal-body p-4">
                    <form action="#" method="post">
                        <input type="text" name="name" class="form-control form-control-lg" placeholder="Name" v-model="newVisitor.name">
                        <input type="text" name="surname" class="form-control form-control-lg" placeholder="Surname" v-model="newVisitor.surname">
                        <input type="text" name="phone" class="form-control form-control-lg" placeholder="Phone" v-model="newVisitor.phone">
                        <input type="text" name="email" class="form-control form-control-lg" placeholder="E-mail"  v-model="newVisitor.email">
                    </form>
                </div>           
                <div class="modal-body p-4">
                    <form action="#" method="post" enctype="multipart/form-data">
                        <label>Select Image</label>
                        <input type="file" name="image" >
                    </form>
                </div>    
                <div class="form-group">
                    <button class="btn btn-success btn-block btn-lg " @click="displayAddOption = false, addVisitor();" >Add Visitor</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AddVisitor",

}
</script>

<style>

</style>