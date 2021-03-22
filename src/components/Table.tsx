import React from 'react';

const Table:React.FC = ({children}) => {
    return (
        <table>
            <tr>
               <th>checked</th>
               <th>task</th>
               <th>remove</th>
            </tr>
            {children}
        </table>
    );
};

export default Table;
