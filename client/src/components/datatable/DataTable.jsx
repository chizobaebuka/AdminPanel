import "./dataTable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesouce";

const DataTable = () => {
    const actionColumn = [{ field: "action", headerName: "Action", width: 200, renderCell:()=> {
        return (
            <div className="cellAction">
                <div className="viewBtn">View</div>
                <div className="deleteBtn">Delete</div>
            </div>
        )
    } }]

    return (
        <div className="datatable">
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable