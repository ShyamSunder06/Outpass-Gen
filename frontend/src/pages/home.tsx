
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

const times = [
    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", 
    "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", 
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", 
    "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", 
    "24:00"
];


const blocks=["Kaveri","Podhigai","Vaigai"]


export  function Home() {

    const [startDate,setstartDate]=useState<string>("")
    const [endDate,setEndDate]=useState<string>("")
    const [inTime,setInTime]=useState<string>("")
    const [outTime,setOutime]=useState<string>("")
    const [reason,setReason]=useState<string>("")
    const [hostelBlock,sethostelBlock]=useState<string>("")









  return (
    <div className="flex h-screen">
      <div className="bg-primary text-primary-foreground w-64 p-6 flex flex-col gap-6">
        <Link to="#" className="flex items-center gap-2">
          <HomeIcon className="w-6 h-6" />
          <span className="text-xl font-bold">Outpass</span>
        </Link>
        <nav className="flex flex-col gap-2">
          <Link to="/home" className="flex items-center gap-2 hover:text-primary-foreground/80" >
            <CalendarIcon className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link to="/outpass" className="flex items-center gap-2 hover:text-primary-foreground/80" >
            <ListIcon className="w-5 h-5" />
            <span>Outpasses</span>
          </Link>
      
        </nav>
      </div>
      <div className="flex-1 bg-background p-8">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Outpass Management</h1>
          <div className="flex items-center gap-4">
        
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Create New Outpass</CardTitle>
            <CardDescription>Fill out the form to request a new outpass.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex justify-evenly gap-4 w-full">
            < div className="flex flex-col w-full">
            <Label >Start Date</Label>
            <input type="date" className="mt-1 hostelBlock w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e)=> {console.log(e.target.value);setstartDate(e.target.value)}} />
            </div>
           
            < div className="flex flex-col w-full">
            <Label >End Date</Label>
            <input type="date" className="mt-1 hostelBlock w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e)=>{console.log(e.target.value);setEndDate(e.target.value)}} />
            </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              
             <Select onValueChange={(val)=>{console.log(val);setInTime(val)}}>
                <SelectTrigger>
                  <SelectValue placeholder="In Time" />
                </SelectTrigger>
                <SelectContent>
                {times.map((time)=>{
                     return <SelectItem value={time}>{time}</SelectItem>
                })}
                </SelectContent>
              </Select>
                  
              <Select onValueChange={(val)=>{console.log(val);setOutime(val)}}>
                <SelectTrigger>
                  <SelectValue placeholder="Out Time" />
                </SelectTrigger>
                <SelectContent>
                {times.map((time)=>{
                     return <SelectItem value={time}>{time}</SelectItem>
                })}
                </SelectContent>
                
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reason">Reason</Label>
              <Textarea id="reason" placeholder="Enter the reason for your outpass" onChange={(e)=>{console.log(reason);setReason(e.target.value)}} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hostel-hostelBlock">Hostel hostelBlock</Label>
              <Select onValueChange={(val)=>{sethostelBlock(val)}}>
                <SelectTrigger>
                  <SelectValue placeholder="Select hostel hostelBlock" />
                </SelectTrigger>
                <SelectContent>
                    {blocks.map((block)=>{
                        return  <SelectItem value={block}>{block}</SelectItem> 
                    })}

                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="ml-auto"  onClick={async ()=>{

                const res=await axios.post(`${BACKEND_URL}/api/student/getOutPass`,{
                    startDate,
                    endDate,
                    outTime,
                    inTime,
                    reason,
                    hostelBlock
                },{
                    headers:{
                        Authorization:localStorage.getItem("usertoken")
                    }
                })

                console.log(res.data)
            
            
            }}>
              Create Outpass
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}



function CalendarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClockIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function HomeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function ListIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}


function SettingsIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}