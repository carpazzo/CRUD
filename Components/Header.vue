<template>
    <div>   
        <!-- App top -->
        <div class="container-fluid">
            <div class="row bg-dark">
                <div class="col-lg-12">
                    <p class="text-center text-light display-4 pt-3" style="font-size:35px">Visitor registration</p>
                </div>
            </div>
        </div>
        <!-- Header with button to add new visitor -->
        <div class="container">
        <div class="row mt-3">
            <div class="col-lg-6">
                <h3 class="text-warning text-center"> Check all the Registered Visitors </h3>
            </div>
            <div class="col-lg-6">
                <button class="btn btn-dark float-right" @click = "displayAddOption = true">
                    Add New Visitor
                </button>
            </div>
        </div>
      
        <hr class="bg-info">
        <!-- Success and Error msg display ,hidden by default / not working*-->
        <div class="alert alert-danger" v-if="errorMsg"> {{ errorMsg }} </div>
        <div class="alert alert-success" v-if="successMsg"> {{ successMsg }} </div>
    </div> 
</template>

<script>
export default {
    name: "Header",
}
</script>

<style>

</style>