export class MatDialogMock {
  open() {
   return new MatDialogRefMock();
 }
}

export class MatDialogRefMock<_T> {
  afterClosed(){}
  close(){}
}
