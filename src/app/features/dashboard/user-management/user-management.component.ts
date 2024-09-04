import {Component} from '@angular/core';
import {User} from './model/User'
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})


export class UserManagementComponent {
  public users: User[] = [
    {id: 1, name: 'John Doe', email: 'john@example.com', avatarUrl: 'https://via.placeholder.com/150'},
    {id: 2, name: 'Jane Smith', email: 'jane@example.com', avatarUrl: 'https://via.placeholder.com/150'},
  ];
  public filteredUsers: User[] = [...this.users];
  public searchTerm: string = '';
  public sortColumn: string = '';
  public sortDirection: string = 'asc';
  public currentPage: number = 1;
  public pageSize: number = 5;
  public showModal: boolean = false;
  public modalTitle: string = '';
  public modalAction: string = '';
  public totalPages: number = Math.ceil(this.users.length / this.pageSize);

  public onSearch(): void {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.updatePagination();
  }

  public sortTable(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.filteredUsers.sort((a: any, b: any) => {
      const aValue = a[column as keyof User];
      const bValue = b[column as keyof User];
      return this.sortDirection === 'asc'
        ? aValue > bValue ? 1 : -1
        : aValue < bValue ? 1 : -1;
    });
  }

  public prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  public nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  public updatePagination(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.filteredUsers = this.users.slice(startIndex, startIndex + this.pageSize);
    this.totalPages = Math.ceil(this.users.length / this.pageSize);
  }

  public toggleSelectAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.filteredUsers.forEach(user => user.selected = checked);
  }

  public deleteSelectedUsers(): void {
    this.users = this.users.filter(user => !user.selected);
    this.filteredUsers = this.filteredUsers.filter(user => !user.selected);
    this.updatePagination();
  }

  public viewUser(user: User): void {
    this.modalTitle = `View User: ${user.name}`;
    this.modalAction = 'view';
    this.showModal = true;
  }

  public editUser(user: User): void {
    this.modalTitle = `Edit User: ${user.name}`;
    this.modalAction = 'edit';
    this.showModal = true;
  }

  public deleteUser(user: User): void {
    this.users = this.users.filter(u => u.id !== user.id);
    this.filteredUsers = this.filteredUsers.filter(u => u.id !== user.id);
    this.updatePagination();
  }

  public addUser(): void {
    this.modalTitle = 'Add New User';
    this.modalAction = 'add';
    this.showModal = true;
  }

  public submitModalForm(): void {
    const newUser: User = {
      id: this.users.length + 1,
      name: 'Testing ',
      email: 'Testing@example.com',
      avatarUrl: 'https://via.placeholder.com/150'
    }
    this.users = [...this.users, newUser];
    this.showModal = false;
  }

  public closeModal(): void {
    this.showModal = false;
  }


}
