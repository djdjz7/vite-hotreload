import './style.css'
import virtualTestObjectAsJson from 'virtual:test-json.json' with { type: 'json'}
import virtualTestObjectAsString from 'virtual:test-string'
import realTestObject from './test.json' with { type: 'json' }


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <table>
    <tr>
        <td>test obj imported from *.json</td>
        <td>${JSON.stringify(realTestObject)}</td>
    </tr>
    <tr>
        <td>test obj imported from virtual *.json</td>
        <td>${JSON.stringify(virtualTestObjectAsJson)}</td>
    </tr>
    <tr>
        <td>test string imported from virtual *.ts</td>
        <td>${virtualTestObjectAsString}</td>
    </tr>
</table>
`
