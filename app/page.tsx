import DataProvider from '@/src/components/DataProvider'
import readXlsxFile from 'read-excel-file/node'

export default async function Home() {
  let columns: any[] = []
  let rows: any[] = []

  const data = await readXlsxFile('public/data/merged_output.xlsx')

  columns = data[0].filter((item) => item != null)
  columns.shift()

  data.shift()
  data.forEach((items) => {
    rows.push(items.filter((item) => item != null))
  })

  return (
    <DataProvider rows={rows} columns={columns} />
  );
}
