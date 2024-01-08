import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Params } from "@angular/router";

@Injectable({
    providedIn:'root'
})


export class TaskService{

    baseUrl = 'http://localhost:3000/tasks'

    constructor(private http : HttpClient){}
// Get Api for fetching Data from database
    getData(){
        return this.http.get(this.baseUrl)
    }
// Post Api for Storing Data in Database   
    postData(obj:any){
        return this.http.post(this.baseUrl,obj )
    }
// Put Api for updating data in database
    updateData(id:number , obj: any){
        return this.http.put(`${this.baseUrl}/${id}`,obj)
    }
// Delete Api for deleting data from database    
    deleteData(id:number){
        return this.http.delete(`${this.baseUrl}/${id}`)
    }
// Fetch single data from database    
    getDataById(id:Params){
        return this.http.get(`${this.baseUrl}/${id}`)
    }
}