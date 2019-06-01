<template>
	<div>
		<section>
			<div class="container customfont">
				<div class="row" style="margin-top: 7%">
					<div class="col-12" align="center">
						<figure>
							<img src="src/images/logo.png" alt="logo industriAR">
							<p>IndustriAR</p>
						</figure>
					</div>
				</div>
				<div align="center">
					<h5>Remember Password</h5>
				</div>
				<div class="login">
					<form>
					  <div class="form-group">
					    <label for="exampleInputEmail1">Username</label>
					    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username">
					  </div>
					  <div align="center">
					  	<button type="submit" class="btn btn-primary">Send request</button>
					  </div>
					  <div align="center" style="margin-top: 5%;">
							<span style="">
								<router-link :to="{ name: 'login', params: { userId: 123 }}">
									<button type="button" id="iconButton" class="btn btn-primary">Go back</button>
								</router-link>
							</span>
						</div>
					</form>
				</div>
			</div>
		</section>
	</div>
</template>

<script>

export default {
name: 'app',
  data () {
    return{}
  },
  computed: {},
    methods: {},
}
</script>