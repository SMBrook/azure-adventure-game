export const gradingEngineBaseUrl = "https://api-grading-engine-assignment-2223.azure-api.net/AzureGraderFunction";
export const apiKey = "a6c5081d0e2b40588841e859f9346ea6";
export const dialogs = {
    "npc_01": [{
        "message": "Hello",
    }, {
        "message": "How are you?",
    }],
    "npc_02": [{
        "message": "Hello there",
    }],
    "npc_03": [{
        "message": "Hi",
    }],
    "npc_04": [{
        "message": "Hey",
    }],
    "sword": [{
        "message": "You got a sword",
    }],
    "push": [{
        "message": "You can push boxes now",
    }],
    "sign_01": [{
        "message": "You can read this!",
    }],
    "book_01": [{
        "message": "Welcome to the game, and now I help you getting back your earned coins before working on new tasks, but it takes sometimes!",
    }]
};

export const tasks = [
  {
    "gameClassOrder": 1,
    "name": "AzureProjectTest.ResourceGroupTest.Test01_ResourceGroupExist AzureProjectTest.ResourceGroupTest.Test02_ResourceGroupLocation",
    "tests": [
      "AzureProjectTest.ResourceGroupTest.Test01_ResourceGroupExist",
      "AzureProjectTest.ResourceGroupTest.Test02_ResourceGroupLocation"
    ],
    "instruction": "Can you create a resource group named 'projProd' in Hong Kong?",
    "filter": "test==\"AzureProjectTest.ResourceGroupTest.Test01_ResourceGroupExist\"||test==\"AzureProjectTest.ResourceGroupTest.Test02_ResourceGroupLocation\"",
    "timeLimit": 2,
    "reward": 10
  },
  {
    "gameClassOrder": 2,
    "name": "AzureProjectTest.StorageAccountTest.Test01_StorageAccountsWithTag",
    "tests": [
      "AzureProjectTest.StorageAccountTest.Test01_StorageAccountsWithTag"
    ],
    "instruction": "Can you create a Storage account in resource group 'projProd' and add tag name 'usage' and value 'logic'?",
    "filter": "test=AzureProjectTest.StorageAccountTest.Test01_StorageAccountsWithTag",
    "timeLimit": 2,
    "reward": 10
  },
  {
    "gameClassOrder": 2,
    "name": "AzureProjectTest.StorageAccountTest.Test02_StorageAccountsWithTag",
    "tests": [
      "AzureProjectTest.StorageAccountTest.Test02_StorageAccountsWithTag"
    ],
    "instruction": "Can you create a Storage account in resource group 'projProd' and add tag name 'usage' and value 'StaticWeb'?",
    "filter": "test=AzureProjectTest.StorageAccountTest.Test02_StorageAccountsWithTag",
    "timeLimit": 2,
    "reward": 10
  },
  {
    "gameClassOrder": 2,
    "name": "AzureProjectTest.StorageAccountTest.Test03_StorageAccountSettings",
    "tests": [
      "AzureProjectTest.StorageAccountTest.Test03_StorageAccountSettings"
    ],
    "instruction": "Can you change your Storage account tagged 'usage' with 'logic' to southeastasia, AccessTier to Hot, StorageV2, Standard_LRS and allow public access?",
    "filter": "test=AzureProjectTest.StorageAccountTest.Test03_StorageAccountSettings",
    "timeLimit": 2,
    "reward": 20
  },
  {
    "gameClassOrder": 2,
    "name": "AzureProjectTest.StorageAccountTest.Test04_WebStorageAccountSettings",
    "tests": [
      "AzureProjectTest.StorageAccountTest.Test04_WebStorageAccountSettings"
    ],
    "instruction": "Can you change your Storage account tagged 'usage' with 'StaticWeb' to eastasia, AccessTier to Hot, StorageV2, Standard_LRS and allow public access?I need the index page of text 'This is index page.' and the error page of text 'This is error page.'.",
    "filter": "test=AzureProjectTest.StorageAccountTest.Test04_WebStorageAccountSettings",
    "timeLimit": 2,
    "reward": 30
  },
  {
    "gameClassOrder": 2,
    "name": "AzureProjectTest.StorageAccountTest.Test05_StorageAccountCodeContainer",
    "tests": [
      "AzureProjectTest.StorageAccountTest.Test05_StorageAccountCodeContainer"
    ],
    "instruction": "I need a Blog container named 'code' in Storage account tagged 'usage' with 'logic'. Can you help?",
    "filter": "test=AzureProjectTest.StorageAccountTest.Test05_StorageAccountCodeContainer",
    "timeLimit": 2,
    "reward": 10
  },
  {
    "gameClassOrder": 2,
    "name": "AzureProjectTest.StorageAccountTest.Test06_StorageAccountMessageTable",
    "tests": [
      "AzureProjectTest.StorageAccountTest.Test06_StorageAccountMessageTable"
    ],
    "instruction": "I need a Azure table named 'message' in Storage account tagged 'usage' with 'logic'. Can you help?",
    "filter": "test=AzureProjectTest.StorageAccountTest.Test06_StorageAccountMessageTable",
    "timeLimit": 2,
    "reward": 10
  },
  {
    "gameClassOrder": 2,
    "name": "AzureProjectTest.StorageAccountTest.Test07_StorageAccountJobQueue",
    "tests": [
      "AzureProjectTest.StorageAccountTest.Test07_StorageAccountJobQueue"
    ],
    "instruction": "I need a Azure Storage Queue named 'job' in Storage account tagged 'usage' with 'logic'. Can you help?",
    "filter": "test=AzureProjectTest.StorageAccountTest.Test07_StorageAccountJobQueue",
    "timeLimit": 2,
    "reward": 10
  },
  {
    "gameClassOrder": 3,
    "name": "AzureProjectTest.VnetTests.Test01_Have2VnetsIn2Regions AzureProjectTest.VnetTests.Test02_VnetAddressSpace",
    "tests": [
      "AzureProjectTest.VnetTests.Test01_Have2VnetsIn2Regions",
      "AzureProjectTest.VnetTests.Test02_VnetAddressSpace"
    ],
    "instruction": "Can you create 2 vnets? First vnet named 'projVnet1Prod' in 'southeastasia' of CIDR '10.0.0.0/16' and Second vnet named 'projVnet2Prod' in 'eastasia' of CIDR '10.1.0.0/16'.",
    "filter": "test==\"AzureProjectTest.VnetTests.Test01_Have2VnetsIn2Regions\"||test==\"AzureProjectTest.VnetTests.Test02_VnetAddressSpace\"",
    "timeLimit": 2,
    "reward": 10
  },
  {
    "gameClassOrder": 3,
    "name": "AzureProjectTest.VnetTests.Test03_VnetWith2Subnets AzureProjectTest.VnetTests.Test04_Vnet1SubnetsCidr AzureProjectTest.VnetTests.Test05_Vnet2SubnetsCidr",
    "tests": [
      "AzureProjectTest.VnetTests.Test03_VnetWith2Subnets",
      "AzureProjectTest.VnetTests.Test04_Vnet1SubnetsCidr",
      "AzureProjectTest.VnetTests.Test05_Vnet2SubnetsCidr"
    ],
    "instruction": "Can you create 2 subnets in vnet named 'projVnet1Prod? CIDR 10.0.1.0/24 and 10.0.0.0/24. Then create 2 subnets in vnet named 'projVnet2Prod' CIDR 10.1.1.0/24 and 10.1.0.0/24",
    "filter": "test==\"AzureProjectTest.VnetTests.Test03_VnetWith2Subnets\"||test==\"AzureProjectTest.VnetTests.Test04_Vnet1SubnetsCidr\"||test==\"AzureProjectTest.VnetTests.Test05_Vnet2SubnetsCidr\"",
    "timeLimit": 5,
    "reward": 20
  },
  {
    "gameClassOrder": 3,
    "name": "AzureProjectTest.VnetTests.Test06_Vnet1PublicSubnetsRoutes",
    "tests": [
      "AzureProjectTest.VnetTests.Test06_Vnet1PublicSubnetsRoutes"
    ],
    "instruction": "Can you set 2 routes in vnet named 'projVnet1Prod VnetLocal and Internet for 10.0.1.0/24 subnet? To make it as a public subnet.",
    "filter": "test=AzureProjectTest.VnetTests.Test06_Vnet1PublicSubnetsRoutes",
    "timeLimit": 5,
    "reward": 10
  },
  {
    "gameClassOrder": 3,
    "name": "AzureProjectTest.VnetTests.Test07_Vnet2PublicSubnetsRoutes",
    "tests": [
      "AzureProjectTest.VnetTests.Test07_Vnet2PublicSubnetsRoutes"
    ],
    "instruction": "Can you set 2 routes in vnet named 'projVnet2Prod VnetLocal and Internet for 10.1.1.0/24 subnet? To make it as a public subnet.",
    "filter": "test=AzureProjectTest.VnetTests.Test07_Vnet2PublicSubnetsRoutes",
    "timeLimit": 5,
    "reward": 10
  },
  {
    "gameClassOrder": 3,
    "name": "AzureProjectTest.VnetTests.Test08_Vnet1PrivateSubnetsRoutes",
    "tests": [
      "AzureProjectTest.VnetTests.Test08_Vnet1PrivateSubnetsRoutes"
    ],
    "instruction": "Can you set 2 routes in vnet named 'projVnet1Prod VnetLocal for 10.0.0.0/24 subnet? To prepare it as a private subnet.",
    "filter": "test=AzureProjectTest.VnetTests.Test08_Vnet1PrivateSubnetsRoutes",
    "timeLimit": 5,
    "reward": 10
  },
  {
    "gameClassOrder": 3,
    "name": "AzureProjectTest.VnetTests.Test09_Vnet2PrivateSubnetsRoutes",
    "tests": [
      "AzureProjectTest.VnetTests.Test09_Vnet2PrivateSubnetsRoutes"
    ],
    "instruction": "Can you set 2 routes in vnet named 'projVnet2Prod VnetLocal for 10.1.0.0/24 subnet? To prepare it as a private subnet.",
    "filter": "test=AzureProjectTest.VnetTests.Test09_Vnet2PrivateSubnetsRoutes",
    "timeLimit": 5,
    "reward": 10
  },
  {
    "gameClassOrder": 3,
    "name": "AzureProjectTest.VnetTests.Test10_Vnet1PublicSubnetsNatGateway",
    "tests": [
      "AzureProjectTest.VnetTests.Test10_Vnet1PublicSubnetsNatGateway"
    ],
    "instruction": "Can you add a Standard NAT Gateway at zone 1 for subnet 10.0.1.0/24 ? ",
    "filter": "test=AzureProjectTest.VnetTests.Test10_Vnet1PublicSubnetsNatGateway",
    "timeLimit": 5,
    "reward": 10
  },
  {
    "gameClassOrder": 3,
    "name": "AzureProjectTest.VnetTests.Test11_VnetGlobalPeering",
    "tests": [
      "AzureProjectTest.VnetTests.Test11_VnetGlobalPeering"
    ],
    "instruction": "Can you add a Virtual Network Peering from projVnet1Prod to projVnet2Prod (Remote)? Allow Forwarded Traffic and Virtual Network Access but not allow Gateway Transit.",
    "filter": "test=AzureProjectTest.VnetTests.Test11_VnetGlobalPeering",
    "timeLimit": 5,
    "reward": 10
  },
  {
    "gameClassOrder": 3,
    "name": "AzureProjectTest.VnetTests.Test12_Vnet1PublicSubnetNetworkSecurityGroup",
    "tests": [
      "AzureProjectTest.VnetTests.Test12_Vnet1PublicSubnetNetworkSecurityGroup"
    ],
    "instruction": "Can you add 2 Network Security Rules to subnet 10.0.1.0/24? First rule allows connect to HTTP from anywhere with priority 201.Second rule allows all TCP outbound to anywhere with priority 100.",
    "filter": "test=AzureProjectTest.VnetTests.Test12_Vnet1PublicSubnetNetworkSecurityGroup",
    "timeLimit": 5,
    "reward": 10
  },
  {
    "gameClassOrder": 3,
    "name": "AzureProjectTest.VnetTests.Test13_Vnet2PublicSubnetNetworkSecurityGroup",
    "tests": [
      "AzureProjectTest.VnetTests.Test13_Vnet2PublicSubnetNetworkSecurityGroup"
    ],
    "instruction": "Can you add 2 Network Security Rules to subnet 10.1.1.0/24? First rule allows connect to HTTP from anywhere with priority 201.Second rule allows all TCP outbound to anywhere with priority 100.",
    "filter": "test=AzureProjectTest.VnetTests.Test13_Vnet2PublicSubnetNetworkSecurityGroup",
    "timeLimit": 5,
    "reward": 10
  },
  {
    "gameClassOrder": 3,
    "name": "AzureProjectTest.VnetTests.Test14_Vnet1PrivateSubnetNetworkSecurityGroup",
    "tests": [
      "AzureProjectTest.VnetTests.Test14_Vnet1PrivateSubnetNetworkSecurityGroup"
    ],
    "instruction": "Can you add 2 Network Security Rules to subnet 10.1.1.0/24? First rule allows HTTP cross vent in bound from 10.1.0.0/24 with priority 201.Second rule allows all TCP outbound to anywhere with priority 100.",
    "filter": "test=AzureProjectTest.VnetTests.Test14_Vnet1PrivateSubnetNetworkSecurityGroup",
    "timeLimit": 5,
    "reward": 10
  },
  {
    "gameClassOrder": 3,
    "name": "AzureProjectTest.VnetTests.Test15_Vnet2PrivateSubnetNetworkSecurityGroup",
    "tests": [
      "AzureProjectTest.VnetTests.Test15_Vnet2PrivateSubnetNetworkSecurityGroup"
    ],
    "instruction": "Can you add 2 Network Security Rules to subnet 10.1.0.0/24? First rule allows HTTP cross vent in bound from 10.0.0.0/24 with priority 201.Second rule allows all TCP outbound to anywhere with priority 100.",
    "filter": "test=AzureProjectTest.VnetTests.Test15_Vnet2PrivateSubnetNetworkSecurityGroup",
    "timeLimit": 5,
    "reward": 10
  },
  {
    "gameClassOrder": 4,
    "name": "AzureProjectTest.ApplicationInsightTest.Test01_AppServicePlanWithTag AzureProjectTest.ApplicationInsightTest.Test02_AppServicePlanSettings",
    "tests": [
      "AzureProjectTest.ApplicationInsightTest.Test01_AppServicePlanWithTag",
      "AzureProjectTest.ApplicationInsightTest.Test02_AppServicePlanSettings"
    ],
    "instruction": "Can you a ApplicationInsight in Hong Kong? Type is 'other', keeps log for 30 days, and tag name is 'key' with value 'ApplicationInsights'.",
    "filter": "test==\"AzureProjectTest.ApplicationInsightTest.Test01_AppServicePlanWithTag\"||test==\"AzureProjectTest.ApplicationInsightTest.Test02_AppServicePlanSettings\"",
    "timeLimit": 3,
    "reward": 10
  },
  {
    "gameClassOrder": 5,
    "name": "AzureProjectTest.AppServiceTest.Test01_AppServicePlanWithTag AzureProjectTest.AppServiceTest.Test02_FunctionAppsWithTag AzureProjectTest.AppServiceTest.Test03_AppServicePlanSettings",
    "tests": [
      "AzureProjectTest.AppServiceTest.Test01_AppServicePlanWithTag",
      "AzureProjectTest.AppServiceTest.Test02_FunctionAppsWithTag",
      "AzureProjectTest.AppServiceTest.Test03_AppServicePlanSettings"
    ],
    "instruction": "Can you a Azure Function App v4 in Hong Kong for node.js 16? I want to use Windows in Consumption plan. Tag the AppServicePlan with {key:AppServicePlan}.Tag the FunctionApps with {key:FunctionApp}.",
    "filter": "test==\"AzureProjectTest.AppServiceTest.Test01_AppServicePlanWithTag\"||test==\"AzureProjectTest.AppServiceTest.Test02_FunctionAppsWithTag\"||test==\"AzureProjectTest.AppServiceTest.Test03_AppServicePlanSettings\"",
    "timeLimit": 10,
    "reward": 20
  },
  {
    "gameClassOrder": 5,
    "name": "AzureProjectTest.AppServiceTest.Test04_AzureFunctionBinding",
    "tests": [
      "AzureProjectTest.AppServiceTest.Test04_AzureFunctionBinding"
    ],
    "instruction": "Create a node.js Azure function with binding: {\"disabled\":false,\"bindings\":[{\"type\":\"httpTrigger\",\"name\":\"req\",\"direction\":\"in\",\"dataType\":\"string\",\"authLevel\":\"anonymous\",\"methods\":[\"get\"]},{\"type\":\"http\",\"direction\":\"out\",\"name\":\"res\"},{\"type\":\"queue\",\"name\":\"jobQueue\",\"queueName\":\"job\",\"direction\":\"out\",\"connection\":\"StorageConnectionAppSetting\"},{\"tableName\":\"message\",\"name\":\"messageTable\",\"type\":\"table\",\"direction\":\"out\",\"connection\":\"StorageConnectionAppSetting\"}]}",
    "filter": "test=AzureProjectTest.AppServiceTest.Test04_AzureFunctionBinding",
    "timeLimit": 5,
    "reward": 10
  },
  {
    "gameClassOrder": 5,
    "name": "AzureProjectTest.AppServiceTest.Test04_FunctionAppSettings",
    "tests": [
      "AzureProjectTest.AppServiceTest.Test04_FunctionAppSettings"
    ],
    "instruction": "I want to set and confirm app settings:1. WEBSITE_RUN_FROM_PACKAGE to Storage account with tag name 'usage' and value 'logic' URL i.e. https://{storageAccount.Name}.blob.core.windows.net/code/app.zip.2. StorageConnectionAppSetting to Storage account with tag name 'usage' and value 'logic' primary connect string.3. WEBSITE_CONTENTAZUREFILECONNECTIONSTRING to Storage account with tag name 'usage' and value 'logic' primary connect string.",
    "filter": "test=AzureProjectTest.AppServiceTest.Test04_FunctionAppSettings",
    "timeLimit": 5,
    "reward": 20
  },
  {
    "gameClassOrder": 5,
    "name": "AzureProjectTest.AppServiceTest.Test05_AzureFunctionCallWithHttpResponse",
    "tests": [
      "AzureProjectTest.AppServiceTest.Test05_AzureFunctionCallWithHttpResponse"
    ],
    "instruction": "Update a node.js Azure function source code When receive a get request ?user=tester&message=abcd, then return 'Hello, tester and I received your message: abcd'",
    "filter": "test=AzureProjectTest.AppServiceTest.Test05_AzureFunctionCallWithHttpResponse",
    "timeLimit": 10,
    "reward": 10
  },
  {
    "gameClassOrder": 5,
    "name": "AzureProjectTest.AppServiceTest.Test05_FunctionAppSettingsInstrumentationKey",
    "tests": [
      "AzureProjectTest.AppServiceTest.Test05_FunctionAppSettingsInstrumentationKey"
    ],
    "instruction": "I want to set and confirm app settings:APPINSIGHTS_INSTRUMENTATIONKEY to the ApplicationInsights InstrumentationKey.",
    "filter": "test=AzureProjectTest.AppServiceTest.Test05_FunctionAppSettingsInstrumentationKey",
    "timeLimit": 5,
    "reward": 10
  },
  {
    "gameClassOrder": 5,
    "name": "AzureProjectTest.AppServiceTest.Test06_AzureFunctionCallSaveDataToAzureTable",
    "tests": [
      "AzureProjectTest.AppServiceTest.Test06_AzureFunctionCallSaveDataToAzureTable"
    ],
    "instruction": "Update a node.js Azure function source code When receive a get request ?user=tester&message=abcd, then save pk 'tester', row key 'abcd' into Azure Storage table named 'message'.",
    "filter": "test=AzureProjectTest.AppServiceTest.Test06_AzureFunctionCallSaveDataToAzureTable",
    "timeLimit": 10,
    "reward": 10
  },
  {
    "gameClassOrder": 5,
    "name": "AzureProjectTest.AppServiceTest.Test07_AzureFunctionCallPutMessageToQueue",
    "tests": [
      "AzureProjectTest.AppServiceTest.Test07_AzureFunctionCallPutMessageToQueue"
    ],
    "instruction": "Update a node.js Azure function source code When receive a get request ?user=tester&message=abcd, then put message {'user':'tester','message': 'abcd','time':'<current time>'} into Azure Storage queue named 'job'.",
    "filter": "test=AzureProjectTest.AppServiceTest.Test07_AzureFunctionCallPutMessageToQueue",
    "timeLimit": 10,
    "reward": 10
  }
];
