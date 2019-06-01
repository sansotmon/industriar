<template>
	<div>
		<IaHeader/>
		<section>
			<div class="description-page">
		        <img src="src/images/icons/svgs/regular/check-square.svg">
		        <span>Summary tasks</span>
		    </div>
			<div class="row">
		        <div class="col">
		            <div id="kpi" style="margin-left: 5%; margin-right: 5%;">
		                <div class="chart-wrapper">
		                    <div id="chart" style="width:100%"></div>
		                </div>
		            </div>
		        </div>
		        <div class="summary-desktop col">
		            <div id="example">
		                <div class="demo-section k-content wide">
		                    <table style="width:100%">
		                        <tr>
		                            <td>
		                                <div></div>
		                            </td>

		                            <td>
		                                <div id="chart"></div>
		                            </td>   
		                            
		                            <td style="width:10%">
		                                <div></div>
		                            </td>

		                            <td >
		                                <div style="overflow-x:auto; overflow-y:hidden;">
			                                <div>
			                                    <h4 style="color:#8e8e8e; text-align: center; font-size:16px">KPI</h4>
			                                    <!-- ngRepeat: item in ctrl.summaryList --><div class="list-group-item ">
			                                        <div style="font-weight:bold;">Month tasks:</div>
		                                            <div style="text-align: right;">
		                                            	{{ printResponse }}
		                                            </div>  
			                                    </div><!-- end ngRepeat: item in ctrl.summaryList --><div class="list-group-item ">
			                                        <div style="font-weight:bold;">Time average canceled:</div>
			                                        <div style="text-align: right;" >10d 24h</div>  
			                                    </div><!-- end ngRepeat: item in ctrl.summaryList --><div class="list-group-item ">
			                                        <div style="font-weight:bold;">Time average pending:</div>
			                                        <div style="text-align: right;" >12d 4h</div>   
			                                    </div><!-- end ngRepeat: item in ctrl.summaryList --><div class="list-group-item ">
			                                        <div style="font-weight:bold;">Time average approved:</div>
			                                        <div style="text-align: right;" >8d 4h</div>
			                                    </div><!-- end ngRepeat: item in ctrl.summaryList --><div class="list-group-item ">
			                                        <div style="font-weight:bold;">Time average created:</div>
			                                        <div style="text-align: right;" >11d 4h</div>
			                                    </div>
			                            	</div>
			                            </div>
		                            </td>  

		                            <td style="width:5%">
		                                <div></div>
		                            </td>
		                        </tr>    
		                    </table>
		                </div>
		            </div>
		        </div>
		    </div>

		    <div class="summary-mobile">
		            <div id="example">
		                <div class="demo-section k-content wide">
		                    <table style="width:100%">
		                        <tr>
		                            <td">
		                                <div></div>
		                            </td>

		                            <td ">
		                                <div id="chart"></div>
		                            </td>   
		                            
		                            <td style="width:10%">
		                                <div></div>
		                            </td>

		                            <td >
		                                <div style="overflow-x:auto; overflow-y:hidden;">
		                                    <div>
		                                        <h4 style="color:#8e8e8e; text-align: center; font-size:16px">KPI</h4>
		                                        <!-- ngRepeat: item in ctrl.summaryList --><div class="list-group-item ">
		                                            <div style="font-weight:bold;">Month tasks:</div>
		                                            <div style="text-align: right;" v-model="totalTasks">
		                                            	<div align="center">
													        <p>{{ printResponse }}</p>
													    </div>
		                                            </div>  
		                                        </div><!-- end ngRepeat: item in ctrl.summaryList --><div class="list-group-item ">
		                                            <div style="font-weight:bold;">Time average canceled:</div>
		                                            <div style="text-align: right;" >10d 24h</div>  
		                                        </div><!-- end ngRepeat: item in ctrl.summaryList --><div class="list-group-item ">
		                                            <div style="font-weight:bold;">Time average pending:</div>
		                                            <div style="text-align: right;" >12d 4h</div>   
		                                        </div><!-- end ngRepeat: item in ctrl.summaryList --><div class="list-group-item ">
		                                            <div style="font-weight:bold;">Time average approved:</div>
		                                            <div style="text-align: right;" >8d 4h</div>
		                                        </div><!-- end ngRepeat: item in ctrl.summaryList --><div class="list-group-item ">
		                                            <div style="font-weight:bold;">Time average created:</div>
		                                            <div style="text-align: right;" >11d 4h</div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </td>  

		                            <td style="width:5%">
		                                <div></div>
		                            </td>
		                        </tr>    
		                    </table>                                </div>
		            </div>
		    </div>
		</section>
	</div>
	
</template>

<script>
import IaHeader from '../../components/layout/header.vue'
import userService from '../../services/querys'

export default {
  name: 'app',
  components: {IaHeader},
  data () {
  	return{
  		response:''
  	}
  },
  computed: {
  	printResponse () {
      return this.response
    }
  },
	methods: {},
	mounted(){

		userService.getTotalTasks('getTotalTasks')
	      .then (res => {
	        if(res.error){
	          this.response = JSON.stringify(res.error)
	        }else{
	          this.response = JSON.stringify(res.message)
	        }
	      })

		let chart = document.createElement('script');    
		chart.setAttribute('src',"../../src/js/chart.js");
		document.head.appendChild(chart);
	}
}
</script>