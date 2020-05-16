<?php

namespace App\Form;

use Cake\Form\Form;
use Cake\Form\Schema;
use Cake\Validation\Validator;
use Cake\Mailer\Email;

class ContactForm extends Form
{

    protected function _buildSchema(Schema $schema)
    {
        return $schema->addField('name', 'string')
            ->addField('email', ['type' => 'string'])
            ->addField('body', ['type' => 'text'])
            ->addField('phone', ['type' => 'string']);
    }

    protected function _buildValidator(Validator $validator)
    {
        $validator->add('name', 'length', [
                'rule' => ['minLength', 5],
                'message' => 'A name is required'
            ])->add('email', 'format', [
                'rule' => 'email',
                'message' => 'A valid email address is required',
            ]);

        return $validator;
    }

    protected function _execute(array $data)
    {
        // Send an email.
        $email = new Email('default');
        $email->setFrom([$data['email']=> $data['name']])->setTo('info@geragear.com')->setSubject('New Contact')->setEmailFormat('html')->send($data['body']);
        return true;
    }
}

