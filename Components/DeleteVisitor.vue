<template>
    <!-- delete a visitor -->
    <div id="overlay" v-if="displayDeleteOption">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title text-center">Delete Visitor</h4>
                        <button type="button" class="close" @click="displayDeleteOption = false">X</button>
                    </div>
                    
                    <h4 class="text-center">You are about to delete!! </h4>
                    <h5 class="text-center">{{ selectedVisitor.name +" "+ selectedVisitor.surname }}</h5>
                    <hr>
                    <button class="btn btn-danger " @click="displayDeleteOption= false; deleteVisitor();">DELETE</button>

                </div>
            </div>
    </div>
    
</template>

<script>
export default {
    name:"DeleteVisitor",

}
</script>

<style>

</style>