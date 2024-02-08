import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID,
)

export const saveDataToAirtable = async (data) => {
  return new Promise((resolve, reject) => {
    base('Table 1').create(
      data,
      function (err, records) {
        if (err) {
          console.error('saveDataToAirtable', err)
          return reject(err)
        }

        resolve(records)
      },
    )
  })
}
