<template>
	<div>
		<IaHeader/>
		<section>
			<div class="description-page">
		        <img src="src/images/icons/svgs/regular/check-square.svg">
		        <span>Disable user</span>
		    </div>
		    <div class="form-mobil">
		        <div class="text-type-1">
		        <p>Id User</p>
		    </div>

		    <div class="row">
		        <div class="col-4"></div>
		        <div class="col-4">
		            <div class="row">
		                <div class="col-6">
		                    <input type="text" name="date">
		                </div>
		                <div class="col-6">
		                    <figure id="figureDelete">
		                        <img src="src/images/icons/svgs/solid/search.svg">
		                    </figure>
		                </div>
		            </div>
		        </div>
		        <div class="col-4 "></div>
		    </div>

		    <div class="line-separator"></div>
		    
		        <form style="margin-left: 25%; margin-right: 25%;">
		          <div class="form-group">
		            <label for="exampleInputEmail1">IdUser</label>
		            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter id">
		          </div>
		          <div class="form-group">
		            <label for="exampleInputPassword1">Name</label>
		            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter name">
		          </div>
		          <div class="row" align="center">
		              <div class="col-4"></div>
		              <div class="col-4">
		                <div class="dropdown">
		                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                    Inactive
		                  </button>
		                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
		                    <a class="dropdown-item" href="#">Active</a>
		                </div>
		                </div>
		          <button style="margin-top: 20%; margin-bottom: 10%" type="submit" class="btn btn-primary">Update</button>
		              </div>
		              <div class="col-4"></div>
		          </div>
		        </form>   
		    </div>

		    <div id="example">
		        <div id="grid-users"></div>
		    </div>
		</section>
	</div>
</template>
<script>
import IaHeader from '../../components/layout/header.vue'

export default {
name: 'app',
  components: {IaHeader},
  data () {
    return{}
  },
  computed: {},
    methods: {},
    mounted(){
        let grid = document.createElement('script');    
        grid.setAttribute('src',"../../src/js/gridUsers.js");
        document.head.appendChild(grid);
    }
}
</script>