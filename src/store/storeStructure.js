const storeStructure = {

    // голобальный флаг загрузки
    isLoading: false,

    manufsAndTransportTypes: {},

    currentPath: {
        vendorId: null,
        transportTypeId: null,
        year: null,
        modelsListIds: [],
        modelId: null,
        partsGroupsIds: [],
        partsGroupId: null
    },

    breadCrumbs: {
        manufacturer: {}
    }

    /*
     vendor: {
     id: 1,
     name: 'name'
     },

     transportType: {
     id: 1,
     name: 'name'
     },

     year: {
     year: 2000
     },

     model: {
     id: 444,
     name: 'yzf r1'
     },

     group: {
     name: 'group',
     details: [

     [
     {
     oem: '333-33-33',
     id: 3243,
     name: 'sdf',
     replacements: []
     },
     {
     oem: '333-33-33',
     id: 3243,
     name: 'sdf',
     replacements: []
     }
     ],
     [
     {
     oem: '333-33-33',
     id: 3243,
     name: 'sdf',
     replacements: []
     },
     {
     oem: '333-33-33',
     id: 3243,
     name: 'sdf',
     replacements: []
     }
     ]


     ]
     }
     */

};

export default storeStructure;


//eclat/#/stepGroup/{groupId=555}

