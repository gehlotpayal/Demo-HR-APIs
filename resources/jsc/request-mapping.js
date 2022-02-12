var request = JSON.parse(context.getVariable('request.content'));

pathSuffix = context.getVariable('pathSuffix');

employeeID=request.username;

context.setVariable('pathSuffix',pathSuffix+'/'+employeeID);