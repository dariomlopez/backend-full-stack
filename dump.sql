-- Active: 1699129953242@@127.0.0.1@3306@ejercicios
-- Dump de ejemplo de la base de datos para ejercicios de programación

-- Crear base de datos si no existe
CREATE DATABASE IF NOT EXISTS ejercicios;

-- Usar dicha base de datos
USE ejercicios;

-- Crear tabla de ejercicios
CREATE TABLE IF NOT EXISTS ejercicios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  enunciado TEXT NOT NULL,
  explicacion TEXT NOT NULL,
  tags JSON,
  pistas TEXT NOT NULL,
  -- creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);

-- Insertar ejemplos de ejercicios:
INSERT INTO ejercicios (titulo, enunciado, explicacion, tags, pistas)
VALUES
  ('Ejercicio 1', 'Enunciado del ejercicio 1...', 'Explicación del ejercicio 1...', '["tag1", "tag2"]', 'Pista 1: ... Pista 2: ... Pista 3: ...'),
  ('Ejercicio 2', 'Enunciado del ejercicio 2...', 'Explicación del ejercicio 2...', '["tag3", "tag4"]', 'Pista 1: ... Pista 2: ... Pista 3: ...'),
  ('Ejercicio 3', 'Enunciado del ejercicio 3...', 'Explicación del ejercicio 3...', '["tag1", "tag3"]', 'Pista 1: ... Pista 2: ... Pista 3: ...');
