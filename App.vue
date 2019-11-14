<template>
    <div>
        <Header></Header>
        <display-visitor></display-visitor>
        <add-visitor></add-visitor>
        <edit-visitor></edit-visitor>
        <delete-visitor></delete-visitor>     
    </div>   
</template>

<script>
import Header from './Components/Header';
import DisplayVisitor from './Components/DisplayVisitor';
import AddVisitor from './Components/AddVisitor';
import EditVisitor from './Components/EditVisitor';
import DeleteVisitor from './Components/DeleteVisitor';

export default {
    name:'app',

    components: {
        Header,
        DisplayVisitor,
        AddVisitor,
        EditVisitor,
        DeleteVisitor,
    },

}
</script>
    
<style>

</style>