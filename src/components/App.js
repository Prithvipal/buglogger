import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import LogItem from './LogItem'


const App = () => {
	const [logs, setLogs] = useState([
		{
			id: 1,
			text: 'This is log one',
			priority: 'low',
			user: 'Parth',
			created: new Date().toString()
		},
		{
			id: 2,
			text: 'This is log two',
			priority: 'moderate',
			user: 'Prithvi',
			created: new Date().toString()
		},
		{
			id: 3,
			text: 'This is log three',
			priority: 'high',
			user: 'Rajani',
			created: new Date().toString()
		}
	])
	return (
		<Container>
			<Table>
				<thead>
					<tr>
						<th>Priority</th>
						<th>Log Text</th>
						<th>User</th>
						<th>Created</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{
						logs.map((log) => (
							<LogItem/>
						 ))
					}
				</tbody>
			</Table>
		</Container>
	)
}

export default App
