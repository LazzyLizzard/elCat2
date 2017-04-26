/**
 * первоначальная загрузка первой страницы - производители и типы транспорта
 * @type {string}
 */

export const MANUF_AND_TYPES_REQ = 'MANUF_AND_TYPES_REQ';
export const MANUF_AND_TYPES_SUCC = 'MANUF_AND_TYPES_SUCC'
//export const MANUF_AND_TYPES_FAIL = 'MANUF_AND_TYPES_FAIL';

const manufReq = () => ({type: MANUF_AND_TYPES_REQ});
//const manufFail = () => ({type: MANUF_AND_TYPES_FAIL});

const manufSucc = (data) => ({
    type: MANUF_AND_TYPES_SUCC,
    payload: {
        manufacturers: data.manufacturers,
        transportTypesData: data.transportTypesData
    }
});

// action generator
export function getManufsAndTypes() {

    const tandt = {
        'manufList': [
            {
                'manuf_id': '1',
                'manuf_name': 'HONDA',
                'manuf_name_safe': '',
                'typesList': [{
                    'transport_type_id': '1',
                    'manuf_id': '1',
                    'ttype_id': '1',
                    'ttype_name': 'ATV',
                    'ttype_name_display': ''
                }, {
                    'transport_type_id': '2',
                    'manuf_id': '1',
                    'ttype_id': '2',
                    'ttype_name': 'Motorcycle',
                    'ttype_name_display': '\u041c\u043e\u0442\u043e'
                }, {
                    'transport_type_id': '3',
                    'manuf_id': '1',
                    'ttype_id': '3',
                    'ttype_name': 'Motor Scooter',
                    'ttype_name_display': '\u0421\u043a\u0443\u0442\u0435\u0440\u044b'
                }, {
                    'transport_type_id': '4',
                    'manuf_id': '1',
                    'ttype_id': '4',
                    'ttype_name': 'Personal Watercraft',
                    'ttype_name_display': '\u0432\u043e\u0434\u043d\u044b\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442'
                }], 'typesCount': 4, 'manufId': 1
            },
            {
                'manuf_id': '2',
                'manuf_name': 'KAWASAKI',
                'manuf_name_safe': ''
            },
            {
                'manuf_id': '3',
                'manuf_name': 'SUZUKI',
                'manuf_name_safe': ''
            }, {
                'manuf_id': '4',
                'manuf_name': 'YAMAHA',
                'manuf_name_safe': ''
            }]
    };

    return (dispatch) => {
        dispatch(manufReq());
        //fetch({});
        setTimeout(() => {
            dispatch(manufSucc(tandt));
        }, 1000)
    }
}


