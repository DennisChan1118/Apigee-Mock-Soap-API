# Apigee-Mock-Soap-API

## Use 'http://{your host}:{your port}/mock-soap-api?wsdl' to get WSDL.

## Use the following 'curl' command to invoke 'AddInteger' service:
```
curl -X POST 'http://{your host}:{your port}/mock-soap-api' \
-H 'Content-Type: text/xml' \
-H 'SOAPAction: http://tempuri.org/SOAP.Demo.AddInteger' \
-d '<SOAP-ENV:Envelope
    xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:s="http://www.w3.org/2001/XMLSchema">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <AddInteger xmlns="http://tempuri.org">
            <Arg1>2</Arg1>
            <Arg2>3</Arg2>
        </AddInteger>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>'
```
