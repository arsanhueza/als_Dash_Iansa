export const schema = {
    "models": {
        "Todo": {
            "name": "Todo",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "nroguia": {
                    "name": "nroguia",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rutcliente": {
                    "name": "rutcliente",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "estad": {
                    "name": "estad",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pesototal": {
                    "name": "pesototal",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "cliente": {
                    "name": "cliente",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fechadespacho": {
                    "name": "fechadespacho",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "horaescaneo": {
                    "name": "horaescaneo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "nrobultos": {
                    "name": "nrobultos",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "producto": {
                    "name": "producto",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "turno": {
                    "name": "turno",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "chofer": {
                    "name": "chofer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "patente": {
                    "name": "patente",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "arrastre": {
                    "name": "arrastre",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Todos",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "1d2363d09384f3db5dd63c5f094bb8cc"
};