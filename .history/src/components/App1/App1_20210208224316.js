import React from 'react'
import Tabs from '../Tabs/Tabs'

export default function App1() {

    document.querySelector('.alert').alert();

    return (
        <div>
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <Tabs />
        </div>
    )
}
