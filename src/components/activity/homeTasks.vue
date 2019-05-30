<template>
	<div>
		<IaHeader/>
		<section>
			<div>
			<div class="description-page">		
				<img src="src/images/icons/svgs/regular/check-square.svg">
				<span>Task list</span>
			</div>
			</div>

			<div class="resumenButton">
				<span style="margin-left: 45%;">
					<button type="button" id="iconButton" formaction="/resumen.html">Task summary</button>
				</span>
			</div>

			<div class="table">
			</div>
			<div>
				<div class="container-mobile">
					<div style="margin-bottom: 3%;">
			  			<h5>Task 1</h5>
			  		</div>

					<div class="task row">
					  <div class="col-3">
					    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
					      <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Info</a>
					      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Abstract</a>
					      <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Cost</a>
					    </div>
					  </div>
					  <div class="col-9">
					    <div class="tab-content" id="v-pills-tabContent">
					      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
					      	<div class="row" style="height: 100%;">
					      		<div class="col-4"></div>
					      		<div class="col-4 circle" style="font-weight: bold;">
					      			1
					      		</div>
					      		<div class="col-4 "></div>
					      	</div>
					      	<div class="text-h4">
					      		<h4>Change screw</h4>
					      	</div>
					      	<div class="text-type-1">
					      		<p>Date</p>
					      	</div>
					      	<div class="row">
					      		<div class="col-6">
					      			<input type="date" name="date">
					      		</div>
					      		<div class="col-6">
					      			<figure>
					      				<img src="src/images/icons/svgs/solid/calendar-alt.svg">
					      			</figure>
					      		</div>
					      	</div>
					      	<div class="text-type-1">
					      		<p>Assign: Pepito Perez</p>
					      	</div>
					      	<div class="text-type-1">
					      		<p>Status: Created</p>
					      	</div>
					      </div>
					      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
					      	<div class="row" style="height: 100%;">
					      		<div class="col-4"></div>
					      		<div class="col-4 circle" style="font-weight: bold;">
					      			1
					      		</div>
					      		<div class="col-4 "></div>
					      	</div>
					      	<div class="text-type-1">
					      		<p>You must remove the screw number 54<br>of the pinion 6</p>
					      	</div>
					      </div>
					      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
					      	<div class="text-type-1">
					      		<p>Workforce	5$</p>
					      	</div>
					      	<div class="text-type-1">
					      		<p>Material 1	7$</p>
					      	</div>
					      	<div class="text-type-1">
					      		<p>Material 2	7$</p>
					      	</div>
					      </div>
					    </div>
					  </div>
					  <div class="buttons row">
					  	<div class="col-6">
					  		<div class="dropdown">
							  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Approved
							  </button>
							  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a class="dropdown-item" href="#">Canceled</a>
							    <a class="dropdown-item" href="#">Pending</a>
							    <a class="dropdown-item" href="#">Sisapproved</a>
							  </div>
							</div>
					  	</div>
					  	<div class="col-6">
					  		<button type="button" class="btn btn-primary">Update</button>
					  	</div>
					  		
					  </div>

					  <div class="row navigation">
					  	<div class="col-4"></div>
				  		<div class="col-4">
				  			<nav aria-label="Page navigation">
							  <ul class="pagination">
							    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
							    <li class="page-item"><a class="page-link" href="#">1</a></li>
							    <li class="page-item"><a class="page-link" href="#">2</a></li>
							    <li class="page-item"><a class="page-link" href="#">3</a></li>
							    <li class="page-item"><a class="page-link" href="#">Next</a></li>
							  </ul>
							</nav>
				  		</div>
				  		<div class="col-4"></div>
					  </div>
			  
					</div>
				</div>	
				<div id="example">
					<div id="grid"></div>
					<div id="details"></div>
				</div>
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
		grid.setAttribute('src',"../../src/js/grid.js");
		document.head.appendChild(grid);

		let products = document.createElement('products');    
		products.setAttribute('src',"../../src/js/products.js");
		document.body.appendChild(products);

	}
}

</script>


