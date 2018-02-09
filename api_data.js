define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "Request version information",
    "version": "1.0.0",
    "name": "GetApi",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "Api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Version of the API</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "providers",
            "description": "<p>Authentication endpoints</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "[\"github\"]"
            ],
            "optional": false,
            "field": "providers.type",
            "description": "<p>Type of provider oauth</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "providers.enabled",
            "description": "<p>Whether the provide is enabled or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "providers.id_application",
            "description": "<p>Id of the application in the oauth provider</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "providers.server",
            "description": "<p>Server Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "providers.version",
            "description": "<p>API Prefix</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "providers.verify",
            "description": "<p>Does it need verify?</p>"
          }
        ]
      }
    },
    "filename": "/home/travis/build/ManageIQ-Exchange/manageiq-exchange/app/controllers/v1/api_controller.rb",
    "groupTitle": "Api"
  },
  {
    "type": "get",
    "url": "/spin_candidates",
    "title": "Request list of spin_candidates for the user",
    "version": "1.0.0",
    "name": "GetSpinCandidate",
    "group": "SpinCandidate",
    "permission": [
      {
        "name": "user",
        "title": "User Authentication Needed",
        "description": ""
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Version of the API</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "providers",
            "description": "<p>Authentication endpoints</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "[\"github\"]"
            ],
            "optional": false,
            "field": "providers.type",
            "description": "<p>Type of provider oauth</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "providers.enabled",
            "description": "<p>Whether the provide is enabled or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "providers.id_application",
            "description": "<p>Id of the application in the oauth provider.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "providers.server",
            "description": "<p>Server Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "providers.version",
            "description": "<p>API Prefix</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "providers.verify",
            "description": "<p>Does it need verify?</p>"
          }
        ]
      }
    },
    "filename": "/home/travis/build/ManageIQ-Exchange/manageiq-exchange/app/controllers/v1/spin_candidates_controller.rb",
    "groupTitle": "SpinCandidate"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Request user index",
    "version": "1.0.0",
    "name": "GetUsers",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.user",
            "description": "<p>User data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.id",
            "description": "<p>ID of user in source control</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.login",
            "description": "<p>Login</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.url_profile",
            "description": "<p>Url of the profile in source control</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Metadata</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "meta.current_page",
            "description": "<p>Current page in pagination</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "meta.total_pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "meta.total_count",
            "description": "<p>Total number of elements</p>"
          }
        ],
        "No Content 204": [
          {
            "group": "No Content 204",
            "optional": false,
            "field": "NoContent",
            "description": "<p>Response has no content</p>"
          }
        ]
      }
    },
    "filename": "/home/travis/build/ManageIQ-Exchange/manageiq-exchange/app/controllers/v1/users_controller.rb",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Request user info",
    "version": "1.0.0",
    "name": "GetUsersShow",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.github_id",
            "description": "<p>ID of user in source control</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.login",
            "description": "<p>Login</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.url_profile",
            "description": "<p>Url of the profile in source control</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "No Content 404": [
          {
            "group": "No Content 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User has not been found</p>"
          },
          {
            "group": "No Content 404",
            "type": "Integer",
            "optional": false,
            "field": "UserNotFound.status",
            "description": "<p>404</p>"
          },
          {
            "group": "No Content 404",
            "type": "String",
            "optional": false,
            "field": "UserNotFound.code",
            "description": "<p>user_not_found</p>"
          },
          {
            "group": "No Content 404",
            "type": "String",
            "optional": false,
            "field": "UserNotFound.title",
            "description": "<p>Error title</p>"
          },
          {
            "group": "No Content 404",
            "type": "String",
            "optional": false,
            "field": "UserNotFound.Detail",
            "description": "<p>Additional detail on error</p>"
          },
          {
            "group": "No Content 404",
            "type": "Object",
            "optional": false,
            "field": "UserNotFound.extra",
            "description": ""
          },
          {
            "group": "No Content 404",
            "type": "String",
            "optional": false,
            "field": "UserNotFound.extra.username",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "filename": "/home/travis/build/ManageIQ-Exchange/manageiq-exchange/app/controllers/v1/users_controller.rb",
    "groupTitle": "Users"
  }
] });