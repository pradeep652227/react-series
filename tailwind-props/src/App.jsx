import '../public/css/App.css'
import Card from './Components/Card'

function App() {
  return (
    <>
    <h1 className='text-black bg-green-400 rounded-xl mb-4 p-4'>Tailwind</h1>
    <Card srcData="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
           altData="AirMax Pro" classData="z-0 h-full w-full rounded-md object-cover" username="Pradeep"
    />
    <Card srcData="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
           altData="AirMax Pro" classData="z-0 h-full w-full rounded-md object-cover"
    />
    </>
  )
}

export default App;
