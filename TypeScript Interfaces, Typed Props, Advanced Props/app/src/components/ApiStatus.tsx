interface StatusProps {
    status: 'success' | 'loading' | 'error'
}

const ApiStatus = () => {

    const statusValue: StatusProps = {
       status:  'error'
    }

    let message;

    if (statusValue.status === 'loading') {
        message = 'Loading...'
    } else if (statusValue.status === 'success') {
        message = 'Fetched Data Successfully'
    } else if (statusValue.status === 'error') {
        message = 'Error fetching data!'
    } else {
        message = 'Encountered unknown error!'
    }

  return (
    <div>
        <h1>Data: </h1>
        {message}
    </div>
  )
}

export default ApiStatus