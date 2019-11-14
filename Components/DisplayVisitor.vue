<template>
    <!-- Table description -->
        <div class="row">
            <div class="col-lg-12">
                <!-- Iterate using vue directiveto display data -->
                <table class="table table-bordered table-hover table-dark" v-bind:key="visitor" v-for="visitor in visitors" >
                    <thead class="thead-dark">
                        <tr class="text-center bg-info text-light">
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Telephone</th>
                            <th>E-mail</th>
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>              
                    </thead>
                    <tbody>
                        <tr class="text-center" >                         
                            <td>{{ visitor.name }}</td>
                            <td>{{ visitor.surname }}</td>
                            <td>{{ visitor.phone }}</td>
                            <td>{{ visitor.email }}</td>
                            <td>{{ visitor.image }}</td>
                            <td><a href="#" @click = "displayEditOption = true; selectedToChange(visitor);">Edit</a></td>
                            <td><a href="#" @click = "displayDeleteOption = true; selectedToChange(visitor);">Delete</a></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
</template>

<script>
export default {
    name:"DisplayVisitor",

}
</script>

<style>

</style>