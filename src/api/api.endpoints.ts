const API_DOMAIN = 'https://api.asfalt-154.ru/api/v1'

export const postTurnkeyAsphaltForm = async (payload: any) => fetch(API_DOMAIN + "/turnkey-asphalt-lead", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
});