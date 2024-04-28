import { FC, useEffect, useMemo, useState } from 'react';
import { type MRT_ColumnDef } from 'material-react-table';
import DataGrid from 'shared-components/components/data-grid';
import { useAppSelector } from 'utils/hooks/redux';
import { getGridRows, selectgridRows } from 'setting/slices/gridSlice';
import { useAppDispatch } from 'utils/hooks/redux';
import * as actions from './grid-actions';
import { Box } from '@mui/material';

export type TSessionManagementGrid = {
  id: number | string;
  title: string;
  description: string;
  checked: boolean;
};

const HomeGrid: FC = () => {
  const dispatch = useAppDispatch();
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  console.log('pagination', pagination);

  const { data, loading } = useAppSelector(selectgridRows);

  useEffect(() => {
    dispatch(getGridRows({ page: pagination.pageIndex + 1, limit: pagination.pageSize }));
  }, [dispatch, pagination]);

  const DataGridColumn = useMemo<MRT_ColumnDef<TSessionManagementGrid>[]>(
    () => [
      {
        accessorKey: 'title',
        header: 'عنوان',
      },
      {
        accessorKey: 'description',
        header: 'توضیحات',
      },
      {
        accessorKey: 'checked',
        header: 'وضعیت',
      },
    ],
    []
  );

  return (
    <DataGrid
      rowCount={data?.length}
      columns={DataGridColumn}
      manualPagination
      onPaginationChange={setPagination}
      autoResetPageIndex={false}
      data={data}
      manualFiltering
      state={{
        isLoading: loading,
        pagination,
      }}
      enableColumnActions={false}
      enableSorting={false}
      enableRowActions
      positionActionsColumn="last"
      renderRowActions={() => (
        <Box>
          <actions.GridEditAction />
          <actions.GridDeleteAction />
        </Box>
      )}
    />
  );
};

export default HomeGrid;
