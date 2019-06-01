<?php 
//carga y se conecta a la base de datos
$username = "root";
$password = "millonarios1";
$hostname = "localhost:3306";
$dbname="industriar";
       
//connection to the database
$conexion = mysqli_connect($hostname, $username, $password, $dbname);
$conn = new mysqli($hostname, $username, $password, $dbname);

//echo "Connected to MySQL<br>";

if (!$conexion) {
    echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuraci車n: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuraci車n: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

$array=array();
$array["q"]="";
foreach($_GET as $key => $value){
    $array[$key]=$value;
}

//Query    
switch ($array["q"]){
    case "login":
	
		$pass= hash('md5', $array["password"]);
		
        $result = mysqli_query($conexion,'SELECT id,name,username,password 
        									FROM user 
        									WHERE username = "'.$array["username"].'"');
        $row = mysqli_fetch_assoc($result);
		
		if($row['id']==null){
	        $response["error"] = "Username no registrado";
       		die(json_encode($response));
		}
		
		if($row['username']==$array['username'] && $row['password']== $pass ){  
			$response["message"] = "Inicio de sesión correcto.";
			$response["id"] = $row['id'];
			$response["username"] = $row['username'];
			$response['name'] = $row['name'];
			die(json_encode($response));
		}else{
			if($row['password']!=$pass)
				$response["error"] = "Contraseña o email incorrectos";
				die(json_encode($response));
			if($row["id"]==0)
				$response["error"] = "Contraseña o email incorrectos.";
				die(json_encode($response));	
		}
	break;

	case "register":
	
		$pass= hash('md5', $array["password"]);
		$id= hash('md5', $array["name"].$array["username"]);

        $query =  mysqli_query($conexion,"INSERT INTO user(id,name,email,username,password,type) 
					VALUES ('".$id."','". $array["name"]."','".$array["email"]."','".$array["username"]."','".$pass."','".$array["type"]."')");
				
		if($query){
			$result = mysqli_query($conexion,'SELECT id,name,username,password 
        									FROM user 
        									WHERE username = "'.$array["username"].'"');
        	$row = mysqli_fetch_assoc($result);
        	if($result){
        		$response['message'] = 'El usuario se ha registrado...';
				$response["id"] = $row['id'];
				$response["username"] = $row['username'];
				$response['name'] = $row['name'];
        	}else{
        		$response['error'] = mysqli_error($conexion);
        	}
		}else{
			$response['error'] = mysqli_error($conexion);
		}
		
        die(json_encode($response));
	break;

	case "info":
		$query = mysqli_query($conexion,'SELECT email_u,nom_u,pass_u,fecha_n_u,tel_u 
											FROM usuario
											WHERE email_u = "'.$array["email_u"].'"');
		$row = mysqli_fetch_assoc($query);
		$response['response'] = 'info';
		$response['email_u'] = $row['email_u'];
		$response['nom_u'] = $row['nom_u'];
		$response['pass_u'] = $row['pass_u'];
		$response['fecha_n_u'] = $row['fecha_n_u'];
		$response['tel_u'] = $row['tel_u'];
		die(json_encode($response));	
	break;

	case "getTasks":
		$query = mysqli_query($conexion,"SELECT DISTINCT task.id as id, task.name as name, task.type as type, task.dateinit as dateTask, task.assign as assign, task.status as status
							FROM task");
							
		if($query){
			while($row = mysqli_fetch_assoc($query)){
				$response["message"][] = $row;			
			}
		}else{
			$response["error"][] = mysqli_error($conexion);
		}
		die(json_encode($response));
	break;

	case "getUsers":
		$query = mysqli_query($conexion,"SELECT DISTINCT user.id as id, user.name as name, user.email as email, user.username as username, user.type as typeUser
							FROM user");
							
		if($query){
			while($row = mysqli_fetch_assoc($query)){
				$response["message"][] = $row;			
			}
		}else{
			$response["error"][] = mysqli_error($conexion);
		}
		die(json_encode($response));
	break;

	case "updateTask":

		$queryFirst = mysqli_query($conexion,'SELECT task.id as id 
					FROM task
					WHERE id = "'.$array["idTask"].'"');

		$row = mysqli_fetch_assoc($queryFirst);

		if($queryFirst){
			if($row['id']==null){
		        $response["error"] = "Esta tarea no existe";
	       		die(json_encode($response));
	       		return;
			}

			$query = mysqli_query($conexion,'UPDATE task 
					SET status = "'.$array["statusTask"].'"
					WHERE id = "'.$array["idTask"].'"');
			if($query){
				$response['message'] = 'Tarea actualizada';
			}else{
				$response["error"] = mysqli_error($conexion);
			}
		}else{
			$response["error"] = mysqli_error($conexion);
		}
		die(json_encode($response));	
	break;

	case "createTask":

		$query =  mysqli_query($conexion,'INSERT INTO task(name,type,assign,status) 
					VALUES ("'. $array["name"].'","'.$array["type"].'","'.$array["assign"].'","'. $array["status"].'")');

		if($query){
			$response["message"] = "Tarea creada...";
        }else{
       		$response["error"] = mysqli_error($conexion);
        }

        die(json_encode($response));

	break;

	case "countTask":
		$queryA = mysqli_query($conexion, 'SELECT * FROM task WHERE status = "Approved"');
		$queryC= mysqli_query($conexion, 'SELECT * FROM task WHERE status = "Canceled"');
		$queryCr = mysqli_query($conexion, 'SELECT * FROM task WHERE status = "Created"');
		$queryP = mysqli_query($conexion, 'SELECT * FROM task WHERE status = "Pending"');

		$rowApproved = mysqli_num_rows($queryA);
		$rowCanceled = mysqli_num_rows($queryC);
		$rowCreated = mysqli_num_rows($queryCr);
		$rowPending = mysqli_num_rows($queryP);

		if($queryA  && $queryC && $queryCr && $queryP){
			$response = '[{"status":"Approved","value":'.$rowApproved.'},{"status":"Canceled","value":'.$rowCanceled.'},{"status":"Created","value":'.$rowCreated.'},{"status":"Pending","value":'.$rowPending.'}]';
			die($response);
			return;
		}else{
			$response["error"] = mysqli_error($conexion);
		}
		die(json_encode($response));
	break;

	case "getTotalTasks":

		$query = mysqli_query($conexion, 'SELECT * FROM task');

		$rowTasks = mysqli_num_rows($query);

		if($query){
			$response["message"] = $rowTasks;
		}else{
			$response["error"] = mysqli_error($conexion);
		}
		die(json_encode($response));
	break;
}
?>