import { Component, OnInit, TemplateRef } from '@angular/core';

import { NbMenuItem, NbToastrService, NbSidebarService, NbDialogService } from '@nebular/theme';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	private index: number = 0;
  constructor(private toastrService: NbToastrService, private sidebarService: NbSidebarService, private dialogService: NbDialogService) { }


  items: NbMenuItem[] = [
    {
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'Change Password',
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Shopping Bag',
      children: [
        {
          title: 'First Product',
        },
        {
          title: 'Second Product',
        },
        {
          title: 'Third Product',
        },
      ],
    },
    {
      title: 'Orders',
      children: [
        {
          title: 'First Order',
        },
        {
          title: 'Second Order',
        },
        {
          title: 'Third Order',
        },
      ],
    },
  ];

  ngOnInit(): void {
  }
  showToast(position) {
    this.toastrService.show(
      'This is super toast message',
      `This is toast number: ${++this.index}`,
      { position });
  }
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }
  loading = false;

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 1000)
  }
}
