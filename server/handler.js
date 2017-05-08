import todosCreate from './todos-create'
import todosReadAll from './todos-read-all'
import todosReadOne from './todos-read-one'
import todosUpdate from './todos-update'
import todosDelete from './todos-delete'

export const create = (event, context) => {
  todosCreate(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    }

    context.succeed(response)
  })
}

export const readAll = (event, context) => {
  todosReadAll(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    }

    context.succeed(response)
  })
}

export const readOne = (event, context) => {
  todosReadOne(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    }

    context.succeed(response)
  })
}

export const update = (event, context) => {
  todosUpdate(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    }

    context.succeed(response)
  })
}

export const doDelete = (event, context) => {
  todosDelete(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    }

    context.succeed(response)
  })
}
