<template>
	<div id="app">
		<div id= "myTopnav" class="row header topnav">
			<div class="topnavMobile row">
	    		<a class="nav-link dropdown-toggle col" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
	          		Men&uacute;
	        	</a>
		        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
		          <a class="dropdown-item" href="#">Consultar Usuarios</a>
		          <a class="dropdown-item" href="#">Crear usuario</a>
		          <a class="dropdown-item" href="#">Eliminar usuario</a>
		          <a class="dropdown-item" href="#">Cerrar sesi&oacute;n</a>
		        </div>
		        <div class="topnavMobile col">
		        	<a href="#">
						<figure>
							<img src="/src/images/icons/svgs/solid/home.svg" alt="home" style="width: 100%; margin-left: 100%;">
						</figure>
					</a>
		        </div>
			</div>
			<div class="col desktop">
				<router-link :to="{ name: 'home', params: { userId: 123 }}">
					<a>
						<figure>
							<img src="/src/images/icons/svgs/solid/home.svg" alt="home">
						</figure>
						<p>Inicio</p>
					</a>
				</router-link>
			</div>
			<div class="col desktop">
				<router-link :to="{ name: 'getusers', params: { userId: 123 }}">
					<a>
						<figure>
							<img src="/src/images/icons/svgs/solid/users.svg" alt="users">
						</figure>
						<p>Consultar usuarios</p>
					</a>
				</router-link>
			</div>
			<div class="col desktop">
				<router-link :to="{ name: 'createuser', params: { userId: 123 }}">
					<a>
						<figure>
							<img src="/src/images/icons/svgs/solid/user-plus.svg" alt="create user">
						</figure>
						<p>Crear usuario</p>
					</a>
				</router-link>
			</div>
			<div class="col desktop">
				<router-link :to="{ name: 'deleteuser', params: { userId: 123 }}">
					<a>
						<figure>
							<img src="/src/images/icons/svgs/solid/user-times.svg" alt="delete user">
						</figure>
						<p>Eliminar Usuario</p>
					</a>
				</router-link>
			</div>
			<div class="col desktop">
				<router-link :to="{ name: 'login', params: { userId: 123 }}">
					<a>
						<figure>
							<img src="/src/images/icons/svgs/solid/sign-out-alt.svg" alt="logout">
						</figure>
						<p>Cerrar sesi&oacute;n</p>
					</a>
				</router-link>
			</div>
		</div>
		<div class="line-separator"></div>
	</div>	
</template>