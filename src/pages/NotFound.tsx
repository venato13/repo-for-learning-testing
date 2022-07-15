import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>This page does not exist</h1>
            <span>Please, go to <Link to='/'>Home page</Link></span>
        </div>
    )
}

export default NotFound;