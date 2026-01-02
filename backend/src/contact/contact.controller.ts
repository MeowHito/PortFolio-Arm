import { Controller, Post, Get, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) { }

    @Post()
    async create(@Body() createContactDto: CreateContactDto) {
        const contact = await this.contactService.create(createContactDto);
        return {
            success: true,
            message: 'Message received successfully!',
            data: contact,
        };
    }

    @Get()
    async findAll() {
        return this.contactService.findAll();
    }
}
