const getStoredJobApplication = () =>{
    const storageJobApplication = localStorage.getItem('job Application') 
    if(storageJobApplication){
        return JSON.parse(storageJobApplication)
    }
    return[]
}

const saveJobApplication = id =>{
   const  saveJobApplications = getStoredJobApplication()
   const exite = saveJobApplications.find(jobId=>jobId==id)
   if(!exite){
     saveJobApplications.push(id)
     localStorage.setItem('job Application', JSON.stringify(saveJobApplications))
   }
}

export { getStoredJobApplication ,saveJobApplication}