<template>
    <!-- Update a Visitor profile -->
    <div id="overlay" v-if="displayEditOption">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Change Visitor Info</h4>
                    <button type="button" class="close" @click="displayEditOption = false">X</button>
                </div>
                <div class="modal-body p-4">
                    <form action="#" method="post">
                        <input type="text" name="name" class="form-control form-control-lg" v-model="selectedVisitor.name" >
                        <input type="text" name="surname" class="form-control form-control-lg" v-model="selectedVisitor.surname" >
                        <input type="text" name="phone" class="form-control form-control-lg" v-model="selectedVisitor.phone">
                        <input type="text" name="email" class="form-control form-control-lg" v-model="selectedVisitor.email">
                    </form>
                </div>
                     <div class="modal-body p-4">
                        <form action="#" method="post" enctype="multipart/form-data">
                            <label>Select Image</label>
                            <input type="file" name="image" class="form-control">
                        </form>
                    </div>
                <div class="form-group">
                    <button class="btn btn-info btn-block btn-lg" @click="displayEditOption= false, updateVisitor();">EDIT</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"EdiitVisitor",

}
</script>

<style>

</style>