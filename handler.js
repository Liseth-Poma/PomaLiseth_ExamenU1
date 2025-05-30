const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient(); // nombre unificado
const tabla = "Empleado";

// Crear empleado
exports.crearEmpleado = async (event) => {
  try {
    console.log("Datos recibidos:", JSON.parse(event.body));

    if (!nombre || !correo || !cargo || !salario) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Todos los campos son obligatorios" }),
      };
    }

    const empleado = {
      id: v4(),
      nombre,
      correo,
      cargo,
      salario,
      fechaIngreso: new Date().toISOString()
    };

    await dynamoDb.put({ TableName: tabla, Item: empleado }).promise();

    return {
      statusCode: 201,
      body: JSON.stringify(empleado),
    };
  } catch (error) {
    console.error("Error al crear empleado:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error interno", mensaje: error.message }),
    };
  }
};


module.exports.obtenerEmpleados = async () => {
  const resultado = await dynamoDb.scan({ TableName: tabla }).promise();
  return {
    statusCode: 200,
    body: JSON.stringify(resultado.Items)
  };
};

module.exports.obtenerEmpleado = async (event) => {
  const { id } = event.pathParameters;
  const resultado = await dynamoDb.get({
    TableName: tabla,
    Key: { id }
  }).promise();

  if (!resultado.Item) {
    return { statusCode: 404, body: JSON.stringify({ error: 'Empleado no encontrado' }) };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(resultado.Item)
  };
};

module.exports.actualizarEmpleado = async (event) => {
  const { id } = event.pathParameters;
  const datos = JSON.parse(event.body);

  const params = {
    TableName: tabla,
    Key: { id },
    UpdateExpression: 'set nombre = :n, correo = :c, cargo = :p, salario = :s',
    ExpressionAttributeValues: {
      ':n': datos.nombre,
      ':c': datos.correo,
      ':p': datos.cargo,
      ':s': datos.salario
    },
    ReturnValues: 'ALL_NEW'
  };

  const resultado = await dynamoDb.update(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(resultado.Attributes)
  };
};

module.exports.eliminarEmpleado = async (event) => {
  const { id } = event.pathParameters;

  await dynamoDb.delete({
    TableName: tabla,
    Key: { id }
  }).promise();

  return {
    statusCode: 204,
    body: null
  };
};
