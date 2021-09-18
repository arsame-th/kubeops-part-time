const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('distribute input: ', async (input) => {
    // TODO: Log the answer in a database
    var result = distribute(input);
    console.log(result);
    rl.close();
});


function distribute(input) {
    const inputs = input.split(',');
    var output_arr = []
    var server_min_job_index = 0 ;
    for (let i=0;i<inputs[0];i++) {   
        output_arr.push([])
    } 
     
    for (let job=0;job<inputs[1];job++){  
        if(server_min_job_index >= output_arr.length){
            server_min_job_index = 0
        }
        output_arr[server_min_job_index].push(job)
        server_min_job_index++;
    }
    return output_arr
}

