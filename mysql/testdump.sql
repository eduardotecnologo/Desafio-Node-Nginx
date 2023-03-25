CREATE TABLE People(
       people_id INT PRIMARY KEY AUTO_INCREMENT, 
       people_name VARCHAR(60)
);
INSERT INTO People(people_name) VALUES("Eduardo");
ALTER USER 'edudeveloper' IDENTIFIED WITH mysql_native_password BY 'root'; 
flush privileges;