<?php
	function validarActivacion($email){

		$conexion = new mysqli('localhost', 'root', 'millonarios1', 'findpetapp');
		$consulta = " SELECT * FROM users_adv WHERE email = '$email' and password IS NOT NULL ";
		$resultado = $conexion->query($consulta);
			
		if($resultado->num_rows == 0)
			return FALSE;
		else
			return TRUE;
	}

	function validarCuenta($email){

		$conexion = new mysqli('localhost', 'root', 'millonarios1', 'findpetapp');
		$consulta = " SELECT * FROM usuario WHERE email_u = '$email' ";
		$resultado = $conexion->query($consulta);
			
		if($resultado->num_rows == 0)
			return FALSE;
		else
			return TRUE;
	}

	function generarLinkTemporal($email){

		$cadena = $idusuario.$email.rand(1,9999999).date('Y-m-d');
		$token = sha1($cadena);
		
		$conexion = new mysqli('localhost', 'root', 'millonarios1', 'findpetapp');

		$sql = "INSERT INTO tblreseteopass (email_u, token, creado) VALUES('$email','$token',NOW());";
		$consulta = " SELECT * FROM tblreseteopass WHERE email_u = '$email' ";

		$resultado2 = $conexion->query($consulta);
			
		if($resultado2->num_rows == 0){
			$enlace = 'https://findpet.com.co/resetpass/restablecer.php?idusuario='.sha1($email).'&token='.$token;
			$resultado = $conexion->query($sql);
			return $enlace;
		}
		else
			return FALSE;
	}

	function enviarEmail( $email, $link ){

		$mensaje = '<html>
		<head>
 			<title>Restablece tu contraseña</title>
		</head>
		<body>
 			<p>Hemos recibido una petici&oacute;n para restablecer la contraseña de tu cuenta.</p>
 			<p>Si hiciste esta petici&oacute;n, haz clic en el siguiente enlace, si no hiciste esta petici&oacute;n puedes ignorar este correo.</p>
 			<p>
 				<strong>Enlace para restablecer tu contraseña</strong><br>
 				<a href="'.$link.'"> Restablecer contraseña </a>
 			</p>
		</body>
		</html>';

		$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
		$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$cabeceras .= 'From: findpetco@gmail.com <Findpet >' . "\r\n";
		
		mail($email, "Recuperar contraseña", $mensaje, $cabeceras);
	}
?>