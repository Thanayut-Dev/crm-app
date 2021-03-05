import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ProjectDashboardDb } from '../fake-db/dashboard-project';
import { AnalyticsDashboardDb } from '../fake-db/dashboard-analytics';
import { CalendarFakeDb } from '../fake-db/calendar';
import { ECommerceFakeDb } from '../fake-db/e-commerce';
import { AcademyFakeDb } from '../fake-db/academy';
import { MailFakeDb } from '../fake-db/mail';
import { ChatFakeDb } from '../fake-db/chat';
import { FileManagerFakeDb } from '../fake-db/file-manager';
import { ContactsFakeDb } from '../fake-db/contacts';
import { TodoFakeDb } from '../fake-db/todo';
import { ScrumboardFakeDb } from '../fake-db/scrumboard';
import { InvoiceFakeDb } from '../fake-db/invoice';
import { ProfileFakeDb } from '../fake-db/profile';
import { SearchFakeDb } from '../fake-db/search';
import { FaqFakeDb } from '../fake-db/faq';
import { KnowledgeBaseFakeDb } from '../fake-db/knowledge-base';
import { IconsFakeDb } from '../fake-db/icons';
import { ChatPanelFakeDb } from '../fake-db/chat-panel';
import { QuickPanelFakeDb } from '../fake-db/quick-panel';

export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            // Dashboards
            'project-dashboard-projects' : ProjectDashboardDb.projects,
            'project-dashboard-widgets'  : ProjectDashboardDb.widgets,
            'analytics-dashboard-widgets': AnalyticsDashboardDb.widgets,

            // Calendar
            'calendar': CalendarFakeDb.data,

            // E-Commerce
            'e-commerce-products' : ECommerceFakeDb.products,
            'e-commerce-orders'   : ECommerceFakeDb.orders,

            // Academy
            'academy-categories': AcademyFakeDb.categories,
            'academy-courses'   : AcademyFakeDb.courses,
            'academy-course'    : AcademyFakeDb.course,

            // Mail
            'mail-mails'  : MailFakeDb.mails,
            'mail-folders': MailFakeDb.folders,
            'mail-filters': MailFakeDb.filters,
            'mail-labels' : MailFakeDb.labels,

            // Chat
            'chat-contacts': ChatFakeDb.contacts,
            'chat-chats'   : ChatFakeDb.chats,
            'chat-user'    : ChatFakeDb.user,

            // File Manager
            'file-manager': FileManagerFakeDb.files,

            // Contacts
            'contacts-contacts': ContactsFakeDb.contacts,
            'contacts-user'    : ContactsFakeDb.user,

            // Todo
            'todo-todos'  : TodoFakeDb.todos,
            'todo-filters': TodoFakeDb.filters,
            'todo-tags'   : TodoFakeDb.tags,

            // Scrumboard
            'scrumboard-boards': ScrumboardFakeDb.boards,

            // Invoice
            'invoice': InvoiceFakeDb.invoice,

            // Profile
            'profile-timeline'     : ProfileFakeDb.timeline,
            'profile-photos-videos': ProfileFakeDb.photosVideos,
            'profile-about'        : ProfileFakeDb.about,

            // Search
            'search': SearchFakeDb.search,

            // FAQ
            'faq': FaqFakeDb.data,

            // Knowledge base
            'knowledge-base': KnowledgeBaseFakeDb.data,

            // Icons
            'icons': IconsFakeDb.icons,

            // Chat Panel
            'chat-panel-contacts' : ChatPanelFakeDb.contacts,
            'chat-panel-chats': ChatPanelFakeDb.chats,
            'chat-panel-user': ChatPanelFakeDb.user,

            // Quick Panel
            'quick-panel-notes' : QuickPanelFakeDb.notes,
            'quick-panel-events': QuickPanelFakeDb.events
        };
    }
}
