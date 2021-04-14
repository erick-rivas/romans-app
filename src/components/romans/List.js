import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "views/romans/List";

function List() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqProcesses = usePagination(`
  {
    processPagination {
      totalPages
      processes {
        input
        result
        createdAt
        user { }
      }
    }
  }`, pageNum, pageSize);

  if (reqProcesses.loading) return <Loading />;
  if (reqProcesses.error) return "Error";
  
  const { processes = [], totalPages = 0 } = reqProcesses.data.processPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    processes={processes}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

List.propTypes = {};

export default List;