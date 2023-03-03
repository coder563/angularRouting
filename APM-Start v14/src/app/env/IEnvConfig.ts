 interface IEnvConfig{

    envName:string
    timeout:number
    logLevel:string
    getDBPassword(envName:string):string
    
}

export default IEnvConfig
