import XLSX from "xlsx"
import path from "node:path"
class Excel{
    async readExcel(filePath, num){
          let workbook=await XLSX.readFile(filePath)
          let sheet=await workbook.Sheets[workbook.SheetNames[num]]
          let Data= XLSX.utils.sheet_to_json(sheet,{header:1})
          return Data
    }
}
export default Excel
