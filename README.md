<!--
title: 'API RESTful Serverless con AWS Lambda y DynamoDB'
description: 'Examen final: desarrollo de una API RESTful completa utilizando tecnologías Serverless en AWS.'
layout: Doc
framework: v4
platform: AWS
language: nodeJS
authorLink: 'https://github.com/Liseth-Poma'
authorName: 'Liseth Poma'

-->

# API RESTful Serverless con AWS Lambda y DynamoDB

**Nombre del estudiante:** Liseth Poma  
**Fecha de entrega:** 30 de mayo de 2025

---

## 📌 Introducción

Este proyecto tiene como finalidad implementar una API RESTful siguiendo el paradigma de arquitectura serverless utilizando **AWS Lambda**, **DynamoDB**, y **API Gateway**, gestionado mediante el **Serverless Framework**. Su objetivo es realizar operaciones CRUD sobre una entidad utilizando funciones Lambda como backend.

El enfoque serverless permite crear aplicaciones altamente escalables, con menor administración de servidores y un modelo de costos basado en uso, lo que lo hace ideal para aplicaciones distribuidas modernas.

---

## ✅ Requisitos del Proyecto

### 🔧 Funcionalidades de la API

- Crear un nuevo elemento en DynamoDB
- Obtener todos los elementos
- Obtener un solo elemento por ID
- Actualizar un elemento existente
- Eliminar un elemento

### 🧰 Tecnologías utilizadas

- **AWS Lambda**
- **API Gateway**
- **Amazon DynamoDB**
- **Serverless Framework**
- **Node.js**

---

## 🛠️ Implementación del Proyecto

### 📁 Estructura del código

```bash
├── handler.js            # Lógica de las funciones Lambda
├── serverless.yml        # Configuración del framework Serverless
├── package.json          # Dependencias del proyecto
└── README.md             # Documentación del proyecto

##  Captura - Crear Proyecto
![Crear Proyecyto](examenlis\capturas\crear.png)

##  Captura - Endpoints creados
![Crear Endpoints](examenlis\capturas\crearempleado.png)

##  Captura - Crear empleados
![Crear Empleado](examenlis\capturas\endpoints.png)
###
Conclusiones
Durante el desarrollo del proyecto se reforzaron conocimientos sobre servicios administrados de AWS, como Lambda y DynamoDB, así como el despliegue automatizado con Serverless Framework. Una de las principales dificultades fue la configuración correcta de los endpoints y los permisos IAM, lo cual se resolvió con documentación y pruebas.

Este enfoque permite crear APIs robustas y escalables sin gestionar servidores, ideal para microservicios y aplicaciones ligeras.